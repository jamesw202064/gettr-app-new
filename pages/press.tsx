import { Container } from '../components/container';
import { Section } from '../components/section';
import { Presses } from '../components/press';
import { SEO } from '../components/seo';
import { compareDesc } from 'date-fns';
import { client } from '../tina/__generated__/client';
import { PressConnectionEdges } from '../tina/__generated__/types';

export default function PressPage(props) {
  let presses = props?.data?.pressConnection?.edges;
  if (process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON === '1') {
    presses = presses.node.filter((item) => item?.node?.isPublish);
  }
  console.log('length', typeof presses);
  const all = presses?.sort(function (a, b) {
    return compareDesc(new Date(a.node.date), new Date(b.node.date));
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
  const tinaProps = await client.queries.pressQuery();

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
