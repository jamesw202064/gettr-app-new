import { Actions } from '../../actions';
import { Section } from '../../section';
import { Container } from '../../container';
import { Icon } from '../../icon';

export const FeatureText = ({ featuresColor, data }) => {
  return (
    <div
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: '16rem' }}
    >
      {data.icon && <Icon parentColor={featuresColor} data={data.icon} />}
      {data.title && <h3 className="text-2xl font-semibold title-font tracking-wide">{data.title}</h3>}
      {data.text && <p className="text-base opacity-80 leading-relaxed">{data.text}</p>}
      {data.actions && <Actions actions={data.actions} />}
    </div>
  );
};

export const FeaturesOnlyText = ({ data }) => {
  return (
    <Section color={data?.color}>
      <Container className={`flex flex-wrap text-left px-4.5 lg:px-0 md:py-32 md:max-w-max_section`} size={'medium'}>
        <div>
          <div
            className="mb-5 text-brand text-3.5xl font-extrabold uppercase tracking-wide"
            style={{
              color: '#c00',
              lineHeight: '39px',
              letterSpacing: '1.41px'
            }}
          >
            {data?.title}
          </div>
          <div
            className="text-sm"
            style={{
              fontSize: '15px',
              maxWidth: '1237px',
              fontWeight: 500,
              lineHeight: '30px',
              letterSpacing: '-0.23px'
            }}
          >
            {data?.excerpt}
          </div>
        </div>
        <div className="flex flex-wrap mt-12 w-full">
          {data?.feature_text &&
            data?.feature_text?.map((block, i) => {
              return (
                <div key={i} className="space-y-3 w-1/2 pr-10">
                  <div
                    className="text-xl font-bold tracking-wide"
                    style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      lineHeight: '39px',
                      letterSpacing: '0.41px'
                    }}
                  >
                    {block.title}
                  </div>
                  <div
                    className="font-medium"
                    style={{
                      color: '#46485b',
                      fontSize: '15px',
                      marginTop: '16px',
                      fontWeight: 500,
                      lineHeight: '20px',
                      marginBottom: '60px',
                      letterSpacing: '-0.23px'
                    }}
                  >
                    {block.text}
                  </div>
                </div>
              );
            })}
        </div>

        {/* {data.items &&
                    data.items.map(function (block, i) {
                        return <FeatureText featuresColor={data.color} key={i} data={block} />;
                    })} */}
      </Container>
    </Section>
  );
};
