import React, { useState, useRef } from 'react';
import { RiShareForwardFill } from 'react-icons/ri';
import { useClickAway, useCopyToClipboard } from 'react-use';

import GettrSvg from 'public/share/gettr_share.svg';
import FacebookSvg from 'public/share/facebook_black.svg';
import TwitterSvg from 'public/share/twitter_black.svg';
import WhatsappSvg from 'public/share/whatsapp_black.svg';
import LinkSvg from 'public/share/link_black.svg';

export const ShareButton: React.FC = () => {
  const [shareDrawerOpen, setShareDrawerOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [, copyToClipboard] = useCopyToClipboard();
  useClickAway(ref, () => {
    setShareDrawerOpen(false);
  });

  const postLink = typeof window !== 'undefined' ? window?.location?.href : '';
  const handleSharePost = (share?: { shareLink?: string }) => (_: any) => {
    const shareLink = share?.shareLink;
    if (shareLink && postLink) {
      window.open(`${shareLink}${postLink}`, '_blank', 'noopener=yes,noreferrer=yes');
    }
    setShareDrawerOpen(false);
  };

  const handleToggleShareDrawer = () => {
    setShareDrawerOpen((open) => !open);
  };

  const ShareDrawer = () => (
    <ul className="rounded-md bg-white">
      <li
        className="whitespace-nowrap cursor-pointer flex items-center p-3 space-x-3 hover:bg-gray-50"
        onClick={handleSharePost({ shareLink: 'https://gettr.com/share?url=' })}
      >
        <GettrSvg className="w-5 h-5" />
        <span>Share on Gettr</span>
      </li>
      <li
        className="whitespace-nowrap cursor-pointer flex items-center p-3 space-x-3 hover:bg-gray-50"
        onClick={handleSharePost({ shareLink: 'https://twitter.com/intent/tweet?url=' })}
      >
        <TwitterSvg className="w-5 h-5" />
        <span>Share on Twitter</span>
      </li>
      <li
        className="whitespace-nowrap cursor-pointer flex items-center p-3 space-x-3 hover:bg-gray-50"
        onClick={handleSharePost({ shareLink: 'https://www.facebook.com/sharer/sharer.php?u=' })}
      >
        <FacebookSvg className="w-5 h-5" />
        <span>Share on Facebook</span>
      </li>
      <li
        className="whitespace-nowrap cursor-pointer flex items-center p-3 space-x-3 hover:bg-gray-50"
        onClick={handleSharePost({ shareLink: 'whatsapp://send?text=' })}
      >
        <WhatsappSvg className="w-6 h-6" />
        <span>Share on Whatsapp</span>
      </li>
      <li
        className="whitespace-nowrap cursor-pointer flex items-center p-3 space-x-3 hover:bg-gray-50"
        onClick={(...args) => {
          copyToClipboard(postLink);
          handleSharePost()(...args);
        }}
      >
        <LinkSvg className="w-5 h-5" />
        <span>Copy Link</span>
      </li>
    </ul>
  );

  return (
    <div ref={ref} className={`fixed z-10 bottom-4 right-4 md:bottom-36 md:right-auto share__button`}>
      <div
        className="cursor-pointer rounded-full py-3 px-10 whitespace-nowrap items-center pointer-events-auto hidden md:flex"
        style={{ background: '#E4E4E4' }}
        onClick={handleToggleShareDrawer}
      >
        <RiShareForwardFill size={18} />
        <span className="ml-2">Share</span>
      </div>
      <div
        className="cursor-pointer flex md:hidden bg-black rounded-full w-11 h-11 items-center justify-center"
        onClick={handleToggleShareDrawer}
      >
        <RiShareForwardFill size={20} color="#fff" />
      </div>
      <div className="hidden md:block">
        <div
          className={`absolute left-1/2 bottom-14 -translate-x-1/2 pointer-events-auto shadow-md bg-gray-50/10 rounded-md ${
            shareDrawerOpen ? '' : 'hidden'
          }`}
        >
          <ShareDrawer />
        </div>
      </div>

      <div className="md:hidden">
        <div className={`fixed z-11 inset-0 ${shareDrawerOpen ? '' : 'hidden'}`}>
          <div
            className="absolute inset-0 bg-black opacity-90"
            onClick={handleToggleShareDrawer}
            style={{
              background: 'rgba(27, 27, 27, 0.9)'
            }}
          />
          <div className="absolute inset-x-0 bottom-0 left-0 right-0 bg-white rounded-t-lg pt-9 pb-8 pl-5 pr-5">
            <ShareDrawer />
            <button
              className="rounded-full w-full h-10 mt-4"
              style={{ background: '#eeeff3' }}
              onClick={handleToggleShareDrawer}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
