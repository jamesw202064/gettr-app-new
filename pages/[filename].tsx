// import { Blocks } from '../components/blocks-renderer';
import { useTina } from 'tinacms/dist/react';
// import { Layout } from '../components/layout';
import { client } from '../tina/__generated__/client';

// import { staticRequest } from 'tinacms';
// import { PageBlocks } from '../components/blocks/page';
import { Blocks } from '../components/blocks-renderer';
// import { layoutQueryFragment } from '../components/layout';
import { SEO } from '../components/seo';
// import type { PagesDocument } from '../.tina/__generated__/types';

export default function HomePage(props: AsyncReturnType<typeof getStaticProps>['props']) {
  //   const title = props?.data?.page || `About`;
  //   const description = props?.data?.page?.title || ``;

  //   const image =
  //     (props?.data?.page?.blocks[0] && props?.data?.page?.blocks[0]) || `https://gettr.com/media/jason-miller.png`;
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });
  //   return (
  //     <Layout rawData={data} data={data.global as any}>
  //       <Blocks {...data.page} />
  //     </Layout>
  //   );
  const title = data?.page?.socialTitle || `About`;
  const description = data?.page?.socialDescription || ``;
  const image = data?.page?.socialImage || `https://gettr.com/media/jason-miller.png`;
  return (
    <>
      <SEO title={title} description={description} imageUrl={image} />
      <Blocks {...props.data.page} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.md`
  });
  console.log('file: [filename].tsx:43 ---- tinaProps:', tinaProps);
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables
    }
  };
};

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection();
  return {
    paths: pagesListData.data.pageConnection.edges.map((page) => ({
      params: { filename: page.node._sys.filename }
    })),
    fallback: false
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R>
  ? R
  : any;
