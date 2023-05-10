import { Section } from '../../section';
import { Container } from '../../container';
import { Markdown } from '../../markdown';

export const Leadership = ({ data, parentField }) => {
  return (
    <Section color={data.color}>
      <Container size={'medium'} className={`px-4.5 lg:px-0 md:py-32 md:max-w-max_section`}>
        <div
          className="text-brand text-3.5xl font-extrabold"
          style={{
            color: '#c00',
            fontSize: '36px',
            fontWeight: 800,
            lineHeight: '39px',
            marginBottom: '35px',
            letterSpacing: '1.41px',
            textTransform: 'uppercase'
          }}
        >
          {data.title}
        </div>
        <div className="md:flex">
          <div className="w-full md:w-370">
            <img className="w-full h-auto object-center object-cover" src={data.avatar} alt={data.name} />
          </div>
          <div className="mt-4 md:mt-0 flex flex-col justify-center md:pl-7.5">
            <div
              className="text-brand text-2xl font-extrabold"
              style={{
                color: '#c0',
                fontSize: '28px',
                fontWeight: 800,
                lineHeight: '34px',
                marginBottom: '2px',
                textTransform: 'uppercase'
              }}
            >
              {data.name}
            </div>
            <div
              className="font-semibold"
              style={{
                color: '#46485b',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '21px',
                marginBottom: '24px'
              }}
            >
              CEO, GETTR
              <br />
              <div
                className="font-bold"
                style={{ color: '#000', fontSize: 16, fontWeight: 'bold', lineHeight: '21px' }}
              >
                <Markdown>{data.gettrProfile}</Markdown>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: '15px',
            fontWeight: 500,
            lineHeight: '30px'
          }}
        >
          <Markdown className="py-17">{data.body}</Markdown>
        </div>

        <p
          className=""
          style={{
            fontSize: '24px',
            fontStyle: 'italic',
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", Helvetica, Arial, sans-serif`,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: '37px',
            marginBottom: '10px'
          }}
        >
          {data.quotation}
        </p>
        <div className="flex flex-col justify-center items-center w-full">
          <div style={{ color: '#c00', fontSize: '16px', fontWeight: 'bold', lineHeight: '21px' }}>Jason Miller</div>
          <div style={{ color: '#6e7187', fontSize: '16px', fontWeight: 'bold', lineHeight: '21px' }}>GETTR CEO</div>
        </div>
      </Container>
    </Section>
  );
};
