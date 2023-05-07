import { getStaticPropsForTina } from 'tinacms';
import { Container } from '../components/container';
import { Section } from '../components/section';
import { Presses } from '../components/press';
import { SEO } from '../components/seo';
import { compareDesc } from 'date-fns';
import { layoutQueryFragment } from '../components/layout';
import { PressConnection } from '../tina/__generated__/types';
import { client } from '../tina/__generated__/client';

export default function HomePage(props) {
  let presses = props?.data?.pressConnection?.edges;
  if (process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON === '1') {
    presses = presses.filter((item) => item?.node?.isPublish);
  }

  const all = presses?.sort(function (a, b) {
    return compareDesc(new Date(a.node.date), new Date(b.node.date));
  });
  console.log("file: press.tsx:21 ---- all:", all)

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
