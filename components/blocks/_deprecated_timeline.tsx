import { Section } from '../section';
import { Container } from '../container';
import { Icon } from '../icon';
import { format } from 'date-fns';

export const Timeline = ({ featuresColor, data }) => {
  return (
    <div
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: '16rem' }}
    >
      {data.icon && <Icon parentColor={featuresColor} data={data.icon} />}
      {/* 
            {data.title && (
                <h3 className="text-2xl font-semibold title-font">{data.title}</h3>
            )}
            {data.text && (
                <p className="text-base opacity-80 leading-relaxed">{data.text}</p>
            )}
            {data.actions && <Actions actions={data.actions} />} */}
    </div>
  );
};

export const Timelines = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container className={`flex flex-wrap gap-x-10 gap-y-8 text-left`} size="large">
        {/* <div className="text-lg font-semibold">Title</div> */}
        {/* {data.items &&
                    data.items.map(function (block, i) {
                        return <Timeline featuresColor={data.color} key={i} data={block} />;
                    })} */}
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap p-10 h-full">
            <div
              className="absolute -top-5 w-6 h-6 rounded-full border-4 border-black bg-transparent"
              style={{
                border: '3px solid #000',
                left: 'calc(50% - 12px)',
                top: '-10px'
              }}
            ></div>
            <div
              className="absolute -top-5 border-1 border-black h-full"
              style={{
                left: '50%',
                top: '12px'
              }}
            ></div>
            <div
              className="absolute bg-black text-white bottom-0 rounded-3xl inline-block px-3 py-1"
              style={{
                left: 'calc(50% - 50.64px)',
                bottom: '-20px'
              }}
            >
              Read More
            </div>
            {data.items &&
              data.items.map(function (block, i) {
                if (i % 2) {
                  return (
                    <div key={i} className="mb-8 flex justify-center flex-row-reverse w-full left-timeline">
                      <div className="order-1 w-11/24"></div>
                      <div className="z-20 flex items-center justify-center order-1 bg-brand shadow-xl w-6 h-6 rounded-full">
                        <div className="bg-brand border-3 border-white rounded-full w-4 h-4 "></div>
                      </div>
                      <div className="order-1 w-11/24">
                        <div className="px-3 flex flex-col items-end">
                          <div className="rounded-3xl text-white text-xs font-semibold bg-brand inline-block px-3 py-1">
                            {block.created_at && format(new Date(block.created_at), 'd MMM, yyyy')}
                          </div>
                          <figure className="flex bg-white rounded-lg px-3 py-3 mt-2 flex-row-reverse text-right">
                            {block.timeline_Image && (
                              <img className=" w-16 h-16 rounded" src={block.timeline_Image} alt="" />
                            )}
                            <div className="px-4 space-y-1">
                              <blockquote>
                                <p className="font-semibold text-lg leading-6">{block.name}</p>
                              </blockquote>
                              <figcaption className="font-medium text-15px">{block.excerpt}</figcaption>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className="mb-8 flex justify-center w-full right-timeline">
                      <div className="order-1 w-11/24"></div>
                      <div className="z-20 flex items-center justify-center order-1 bg-brand shadow-xl w-6 h-6 rounded-full">
                        <div className="bg-brand border-3 border-white rounded-full w-4 h-4 "></div>
                      </div>
                      <div className="order-1 w-11/24">
                        <div className="px-3">
                          <div className="rounded-3xl text-white text-xs font-semibold bg-brand inline-block px-3 py-1">
                            {block.created_at && format(new Date(block.created_at), 'd MMM, yyyy')}
                          </div>
                          <figure className="flex bg-white rounded-lg px-3 py-3 mt-2">
                            {block.timeline_Image && (
                              <img className=" w-16 h-16 rounded" src={block.timeline_Image} alt="" />
                            )}
                            <div className="px-4 space-y-1">
                              <blockquote>
                                <p className="font-semibold text-lg leading-6">{block.name}</p>
                              </blockquote>
                              <figcaption className="font-medium text-15px">{block.excerpt}</figcaption>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            {/* <div className="mb-8 flex justify-center w-full right-timeline">
                            <div className="order-1 w-11/24"></div>
                            <div className="z-20 flex items-center justify-center order-1 bg-brand shadow-xl w-6 h-6 rounded-full">
                                <div className="bg-brand border-3 border-white rounded-full w-4 h-4 "></div>
                            </div>
                            <div className="order-1 w-11/24">
                                <div className="px-3">
                                    <div className="rounded-3xl text-white text-xs font-semibold bg-brand inline-block px-3 py-1">
                                        June 15, 2021
                                    </div>
                                    <figure className="flex bg-white rounded-lg px-3 py-3 mt-2">
                                        <img className=" w-16 h-16 rounded" src="https://i.pravatar.cc/100" alt="" />
                                        <div className="px-4 space-y-1">
                                            <blockquote>
                                                <p className="font-semibold text-lg leading-6">
                                                    Twitter suspends André Ventura's account - again
                                                </p>
                                            </blockquote>
                                            <figcaption className="font-medium text-15px">
                                                The president of the Chega party, André Ventura, has had his official Twitter account suspended AGAIN, the social network considered that the leader of Chega had violated the rules “against abuse and harassment”.
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8 flex justify-center flex-row-reverse w-full left-timeline">
                            <div className="order-1 w-11/24"></div>
                            <div className="z-20 flex items-center justify-center order-1 bg-brand shadow-xl w-6 h-6 rounded-full">
                                <div className="bg-brand border-3 border-white rounded-full w-4 h-4 "></div>
                            </div>
                            <div className="order-1 w-11/24">
                                <div className="px-3 flex flex-col items-end">
                                    <div className="rounded-3xl text-white text-xs font-semibold bg-brand inline-block px-3 py-1">
                                        June 15, 2021
                                    </div>
                                    <figure className="flex bg-white rounded-lg px-3 py-3 mt-2 flex-row-reverse text-right">
                                        <img className=" w-16 h-16 rounded" src="https://i.pravatar.cc/100" alt="" />
                                        <div className="px-4 space-y-1">
                                            <blockquote>
                                                <p className="font-semibold text-lg leading-6">
                                                    Twitter suspends André Ventura's account - again
                                                </p>
                                            </blockquote>
                                            <figcaption className="font-medium text-15px">
                                                The president of the Chega party, André Ventura, has had his official Twitter account suspended AGAIN, the social network considered that the leader of Chega had violated the rules “against abuse and harassment”.
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-center w-full right-timeline">
                            <div className="order-1 w-11/24"></div>
                            <div className="z-20 flex items-center justify-center order-1 bg-brand shadow-xl w-6 h-6 rounded-full">
                                <div className="bg-brand border-3 border-white rounded-full w-4 h-4 "></div>
                            </div>
                            <div className="order-1 w-11/24">
                                <div className="px-3">
                                    <div className="rounded-3xl text-white text-xs font-semibold bg-brand inline-block px-3 py-1">
                                        June 15, 2021
                                    </div>
                                    <figure className="flex bg-white rounded-lg px-3 py-3 mt-2">
                                        <img className=" w-16 h-16 rounded" src="https://i.pravatar.cc/100" alt="" />
                                        <div className="px-4 space-y-1">
                                            <blockquote>
                                                <p className="font-semibold text-lg leading-6">
                                                    Twitter suspends André Ventura's account - again
                                                </p>
                                            </blockquote>
                                            <figcaption className="font-medium text-15px">
                                                The president of the Chega party, André Ventura, has had his official Twitter account suspended AGAIN, the social network considered that the leader of Chega had violated the rules “against abuse and harassment”.
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-center flex-row-reverse w-full left-timeline">
                            <div className="order-1 w-11/24"></div>
                            <div className="z-20 flex items-center justify-center order-1 bg-brand shadow-xl w-6 h-6 rounded-full">
                                <div className="bg-brand border-3 border-white rounded-full w-4 h-4 "></div>
                            </div>
                            <div className="order-1 w-11/24">
                                <div className="px-3 flex flex-col items-end">
                                    <div className="rounded-3xl text-white text-xs font-semibold bg-brand inline-block px-3 py-1">
                                        June 15, 2021
                                    </div>
                                    <figure className="flex bg-white rounded-lg px-3 py-3 mt-2 flex-row-reverse text-right">
                                        <img className=" w-16 h-16 rounded" src="https://i.pravatar.cc/100" alt="" />
                                        <div className="px-4 space-y-1">
                                            <blockquote>
                                                <p className="font-semibold text-lg leading-6">
                                                    Twitter suspends André Ventura's account - again
                                                </p>
                                            </blockquote>
                                            <figcaption className="font-medium text-15px">
                                                The president of the Chega party, André Ventura, has had his official Twitter account suspended AGAIN, the social network considered that the leader of Chega had violated the rules “against abuse and harassment”.
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};
