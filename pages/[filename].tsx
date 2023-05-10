import { useTina } from 'tinacms/dist/react';
import { client } from '../tina/__generated__/client';
import { Blocks } from '../components/blocks-renderer';
import { SEO } from '../components/seo';

export default function HomePage(props: AsyncReturnType<typeof getStaticProps>['props']) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });
  const title = data?.page?.socialTitle || `About`;
  const description = data?.page?.socialDescription || ``;
  const image = data?.page?.socialImage || `https://gettr.com/media/jason-miller.png`;
  return (
    <>
      <SEO title={title} description={description} imageUrl={image} />
      <Blocks {...data.page} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${params.filename}.md`
  });
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
