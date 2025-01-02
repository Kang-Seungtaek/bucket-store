import { HTMLAttributes } from 'react';

type HeaderProps = HTMLAttributes<HTMLElement>

export default function Header({ ...props }: HeaderProps) {
  return <nav {...props}
              className={`sticky top-0 z-10 w-full h-[127px] sm:h-[56px] lg:h-[90px] p-[23px_10px] flex items-center bg-black text-white ${props.className}`}>
    <div className={'sm:hidden flex flex-col items-start lg:flex-row lg:items-center gap-[10px]'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="187" height="30" viewBox="0 0 280 50">
        <g fill="#fff">
          <path
            d="M113 .9c-10.7 3.5-16.8 11.3-17.8 22.6-1.5 18.8 18.1 32.2 35.3 24.1 2.8-1.3 5.8-3.2 6.7-4.3 1.7-1.9 1.6-2.1-1.6-5.2l-3.3-3.2-3.9 2.6c-3.3 2.3-4.7 2.6-9.3 2.2-4.7-.3-5.9-.9-8.7-4-9.5-10.3-2.2-27 11.2-25.4 2.3.2 5.7 1.5 7.4 2.7l3.2 2.3 3.3-3.9c1.8-2.1 3.1-4.2 2.9-4.6-.3-.4-2.5-1.9-4.9-3.3C128.8.7 117.8-.7 113 .9zM0 25v24h10V29h7.3c8.5 0 12.1 1.5 12.5 5.2.4 3.7-3 5.8-9.5 5.8H15v9h6.9c8 0 11.5-1.1 15.3-4.7 5.4-5.2 4.5-14.5-1.7-18.3l-3.3-2.1 2.3-2.3c6.2-6.2 3.7-16.3-4.8-19.5C28.1 1.5 20.8 1 13.4 1H0v24zm25.1-14c2.2 1.2 2.6 5.9.7 7.8-.7.7-4.2 1.2-8.5 1.2H10V10h6.6c3.6 0 7.4.5 8.5 1zM47.2 19.3c.3 18 .4 18.4 3 22.4 3.7 5.6 8.6 7.8 17.3 7.8 8.5 0 13.6-2.2 17.1-7.5 3.2-4.8 4.4-12.5 4.4-28.3V1H78v15c0 21-1.9 24.8-11.8 23.7-8-.9-9.2-4-9.2-24.8V1H46.9l.3 18.3zM145 25v24h11v-7.3c0-6.8.2-7.5 2.9-10.1l2.9-2.8 7.3 10.1 7.3 10.1h6.4c5 0 6.2-.3 5.5-1.3-2.1-2.6-17.9-24.3-18.6-25.4-.5-.7 2.9-5 8.9-11.2L188.2 1h-12.7l-9.7 10.2-9.7 10.3V11.2L156 1h-11v24zM196 25v24h36v-9h-26V30h26V20h-26V10h26V1h-36v24zM240 6v5h15v38h10V11h15V1h-40v5z"></path>
        </g>
      </svg>
      <span className={'text-[16p] text-white font-semibold'}>브랜드</span>
    </div>
  </nav>;
}
