import { getStaticPropsForTina } from 'tinacms';
import { Container } from '../components/container';
import { Section } from '../components/section';
import { Presses } from '../components/presses';
import { SEO } from '../components/seo';
import { compareDesc } from 'date-fns';
import { layoutQueryFragment } from '../components/layout';
import { PressConnection } from '../tina/__generated__/types';
import { client } from '../tina/__generated__/client';

export default function HomePage(props) {
  let presses = props?.data?.getPressList?.edges;
  if (process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON === '1') {
    presses = presses.filter((item) => item?.node?.data?.isPublish);
  }

  const all = presses?.sort(function (a, b) {
    return compareDesc(new Date(a.node.data.date), new Date(b.node.data.date));
  });

  return (
    <>
      <SEO title="Press" />
      <Section className="flex-1">
        <Container size="medium" className="px-4 md:px-6">
          <Presses data={all} />
        </Container>
      </Section>
    </>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.pageQuery();
  //   const tinaProps = (await getStaticPropsForTina({
  //     query: `#graphql
  //       query PageQuery {
  //         ${layoutQueryFragment}
  //         getPressList {
  //           edges {
  //             node {
  //               id
  //               data {
  //                 date
  //                 title
  //                 excerpt
  //                 isPublish
  //               }
  //               sys {
  //                 filename
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `,
  //     variables: {}
  //   })) as { data: { getPressList: PressConnection } };

  return {
    props: {
      ...tinaProps
    }
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R>
  ? R
  : any;
