import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { titleCase } from 'title-case';
import format from 'date-fns/format';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';

export const Presses = ({ data }) => {
  const route = useRouter();
  const page = parseInt(route.query.page as string);
  // const theme = React.useContext(ThemeContext);
  // const [page, setPage] = useState(1);

  // const handleClick = num => {
  //     setPage(num);
  // }
  // const titleColorClasses = {
  //     blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
  //     teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
  //     green: "group-hover:text-green-600 dark:group-hover:text-green-300",
  //     red: "group-hover:text-red-600 dark:group-hover:text-red-300",
  //     pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
  //     purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
  //     orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
  //     yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  // };

  const itemsPerPage = 10;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(page ? itemsPerPage * (page - 1) : 0);

  useEffect(() => {
    // Fetch items from another resources.
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(pageCount);
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    const page = Math.floor(newOffset / itemsPerPage) + 1;

    // fix: workaround for smooth scroll not working in firefox, https://github.com/vercel/next.js/issues/12105
    setTimeout(() => {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }, 0);
    route.push(
      {
        pathname: '/press',
        query: { page }
      },
      undefined,
      { shallow: true, scroll: false }
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-16">
      {currentItems.map((postData, index) => {
        const post = postData.node;
        let formattedDate;
        if (post?.data?.date !== null) {
          const date = post.data?.date ? new Date(post?.data?.date) : '';
          formattedDate = date ? format(date, 'MMMM d, yyyy') : date;
        }
        return (
          <div key={index}>
            <p className="text-brand font-bold mb-3">{formattedDate}</p>
            <Link href={`/press/` + post.sys.filename} passHref>
              <a className=" font-extrabold text-3.5xl mb-6 leading-none hover:underline">
                {titleCase(post?.data?.title)}
              </a>
            </Link>
            <p className="text-sm font-medium mt-6 leading-loose">
              <Link href={`/press/` + post.sys.filename} passHref>
                <a key={post.id} className="line-clamp-5 md:line-clamp-3">
                  {post?.data?.excerpt}
                </a>
              </Link>
            </p>
            <Link href={`/press/` + post.sys.filename} passHref>
              <a className="inline-block mt-6">
                <span
                  className="text-white text-sm font-bold bg-btn1 rounded-full"
                  style={{
                    display: 'inline-block',
                    lineHeight: '21px',
                    padding: '7.5px 15px'
                  }}
                >
                  Read More
                </span>
              </a>
            </Link>
            <hr className="mt-9 md:mt-16" style={{ background: '#DADFE6' }} />
          </div>
        );
      })}

      <div className="mx-auto">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          forcePage={page ? page - 1 : 0}
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
