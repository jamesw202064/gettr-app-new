// import { Actions } from '../../actions';
import { Section } from '../../section';
import { Container } from '../../container';
// import { Icon } from '../../icon';

export const Partner = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container size={'medium'} className={`px-4.5 lg:px-0 md:py-32 md:max-w-max_section`}>
        <ul className="grid grid-cols-3 md:grid-cols-5 gap-6">
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="reuters" src={data.reuters} />
            {/* <span>Reuters</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="the_wall_street_journal_ny_post" src={data.the_wall_street_journal_ny_post} />
            {/* <span>The Wall Street</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="new_york_post" src={data.new_york_post} />
            {/* <span>New York Post</span> */}
          </li>

          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="nbc_news" src={data.nbc_news} />
            {/* <span>NBC news</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="vox" src={data.vox} />
            {/* <span>vox</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="insider" src={data.insider} />
            {/* <span>Insider</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="mashable" src={data.mashable} />
            {/* <span>Mashable</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="new_yorker" src={data.new_yorker} />
            {/* <span>New Yorker</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="the_daily_beast" src={data.the_daily_beast} />
            {/* <span>The daily beast</span> */}
          </li>
          <li className="flex flex-col justify-center items-center ">
            <img width={140} alt="news_week" src={data.news_week} />
            {/* <span>news_weekk</span> */}
          </li>
        </ul>
      </Container>
    </Section>
  );
};
