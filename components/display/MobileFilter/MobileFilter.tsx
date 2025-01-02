'use client';

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui';

export default function MobileFilter() {
  return (
    <Drawer snapPoints={[1]} fadeFromIndex={0}>
      <DrawerTrigger asChild>
        <button
          className={'hidden sm:flex fixed bottom-[70px] self-center px-[30px] h-[35px] items-center justify-center bg-black text-[14px] text-white font-bold rounded-[18px]'}>필터
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>필터</DrawerTitle>
            <DrawerDescription />
          </DrawerHeader>
          <div className={'w-full h-[150px] bg-white'}></div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
