import { Press } from '../../components/press';
import { staticRequest, getStaticPropsForTina } from 'tinacms';
import { client } from '../../tina/__generated__/client';
import { layoutQueryFragment } from '../../components/layout';
import { PressConnection, PressDocument } from '../../tina/__generated__/types';
import FourOhFour from '../404';
import PressGenerating from '../pressGenerating';
import { compareDesc } from 'date-fns';

import { Post } from '../../components/posts/post';
import { useTina } from 'tinacms/dist/react';
import { Layout } from '../../components/layout';

// Use the props returned by get static props
export default function BlogPressPage(props: AsyncReturnType<typeof getStaticProps>['props']) {
  //   const prev = props.prev;
  //   const next = props.next;
  //   if (props?.data?.getPressDocument?.sys?.filename) {
  //     return <Press {...props?.data?.getPressDocument} prev={prev} next={next} />;
  //   }
  //   if (process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON === '0') {
  //     return <PressGenerating />;
  //   } else {
  //     // We're likely loading a new document that doesn't yet have data
  //     // show the 404 which will quickly be replace by client side content
  //     // from Tina
  //     return <FourOhFour />;
  //   }
  return (
    <Layout>
      <div>No data</div>;
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.press({
    relativePath: `${params.filename}.md`
  });

  return {
    props: {
      ...tinaProps
    }
  };

  //   const tinaProps = (await getStaticPropsForTina({
  //     query: `
  //         query BlogPostQuery($relativePath: String!) {
  //             ${layoutQueryFragment}
  //             getPressDocument(relativePath: $relativePath) {
  //                 data {
  //                     title
  //                     date
  //                     body
  //                     socialImage
  //                     socialTitle
  //                     socialDescription
  //                 }
  //                 sys {
  //                     filename
  //                 }
  //             }
  //         }
  //     `,
  //     variables: { relativePath: `${params.filename}.md` }
  //   })) as { data: { getPressDocument: PressDocument } };
  //   const allPosts = (await getStaticPropsForTina({
  //     query: `
  //             query getAllPosts{
  //               getPressList{
  //                 edges {
  //                   node {
  //                     id
  //                     sys {
  //                       filename
  //                       basename
  //                     }
  //                     data {
  //                       title
  //                       date
  //                       isPublish
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //         `
  //   })) as { data: { getPressList: PressConnection } };
  //   let list = allPosts?.data?.getPressList?.edges;
  //   if (process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON === '1') {
  //     list = list?.filter((item) => item?.node?.data?.isPublish);
  //   }
  //   const all = list?.sort(function (a, b) {
  //     return compareDesc(new Date(a?.node?.data?.date), new Date(b?.node?.data?.date));
  //   });
  //   const index = all?.findIndex((item) => {
  //     return item?.node?.sys?.filename === tinaProps?.data?.getPressDocument?.sys?.filename;
  //   });
  //   return {
  //     props: {
  //       ...tinaProps,
  //       prev: list?.[index - 1] ? list?.[index - 1] : null,
  //       next: list?.[index + 1] ? list?.[index + 1] : null
  //     }
  //   };
};

/**
 * To build the blog post pages we just iterate through the list of
 * Press and provide their "filename" as part of the URL path
 *
 * So a blog post at "content/press/hello.md" would
 * be viewable at http://localhost:3000/press/hello
 */
export const getStaticPaths = async () => {
  const pressListData = await client.queries.pressConnection();
  return {
    paths: pressListData.data.pressConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename }
    })),
    fallback: 'blocking'
  };

  //   const postsListData = (await staticRequest({
  //     query: `
  //       {
  //         getPressList {
  //           edges {
  //             node {
  //               sys {
  //                 filename
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  //   })) as { data: { getPressList: PressConnection } };
  //   return {
  //     paths: postsListData?.data?.getPressList?.edges.map((post) => ({
  //       params: { filename: post?.node?._sys.filename }
  //     })),
  //     fallback: 'blocking'
  //   };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R>
  ? R
  : any;
