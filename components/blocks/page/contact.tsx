import { Section } from '../../../components/section';
import { Container } from '../../../components/container';
import { Markdown } from '../../../components/markdown';

export const Contact = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container size={'large'} className={`md:flex flex-wrap gap-x-10 gap-y-8 text-left lg:px-0 md:max-w-max_section`}>
        <div className="md:grid lg:grid-cols-2">
          <div className="contact__text">
            <div className="text-brand font-extrabold text-3.5xl tracking-wide">{data.title}</div>
            <Markdown className="contact__text">{data.body}</Markdown>
            {/* <p>We love working with journalists to share captivating stories. Send us an email and our team will be in touch very soon.</p>
                        <p>We would greatly appreciate if you can include the following details in your email:</p>
                        <ol>
                            <li>Your first and last name.</li>
                            <li>Your email and/ or phone number.</li>
                            <li>The press company you work with.</li>
                            <li>Share with us the story you are working on, and tell us how we can help you.</li>
                        </ol>
                        <button className="blue">Media contact: Press@GETTR.com</button> */}
          </div>
          <div className="bg-white rounded-md w-full md:w-152 mt-6 lg:mt-0">
            <div className="p-6 md:p-12 rounded-md shadow-md">
              <form
                action="https://GETTR.us5.list-manage.com/subscribe/post?u=ba369d366bf6ca0ee2e11d0b9&amp;id=3594d13f36"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
                // rel="noopener noreferrer"
              >
                <div className="space-y-8">
                  <label className="block">
                    <input
                      type="text"
                      className="required mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder="Your name *"
                      name="NAME"
                      id="mce-NAME"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      className="required email mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder="Email *"
                      name="EMAIL"
                      id="mce-EMAIL"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder="Company"
                      name="COMPANY"
                      id="mce-COMPANY"
                    />
                  </label>
                  <label className="block">
                    <input
                      type="text"
                      className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder="Phone"
                      name="PHONE"
                      id="mce-PHONE"
                    />
                  </label>
                  <label className="block">
                    <span className=" mb-2 inline-block">Your message *</span>
                    <textarea
                      className="w-full p-3 rounded-md border-gray-200"
                      rows={8}
                      placeholder="required Type your message here and someone will get back to you by email."
                      name="MESSAGE"
                      id="mce-MESSAGE"
                    />
                  </label>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                </div>
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_ba369d366bf6ca0ee2e11d0b9_3594d13f36" tabIndex={-1} />
                </div>

                <div className="mt-6">
                  <button
                    className="text-white bg-btn1 px-5 py-2 rounded-full button"
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
