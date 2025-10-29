import React from "react";

const Nav = () => {
  return (
    <aside
      id="layout1"
      className="
                h-[80vh] w-full lg:w-auto lg:basis-[20%] flex-shrink-0
                rounded-[12px] border border-[#ff8aa0] p-3 overflow-hidden
                shadow-[0_2px_10px_rgba(0,0,0,0.06)]
              "
      style={{ background: "#ffe9ea" }}
    >
      <div className="bg-[#111] text-white rounded-[10px] px-3 py-2 mb-2 font-semibold">
        Side Title
      </div>
      <div className="bg-sky-400 rounded-[10px] p-3 h-[80%]">
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
        <div clssName="text-align-center font-size-10px">콘텐츠</div>
      </div>
      <div className="bg-[#ffe680] rounded-[8px] px-3 py-2 mt-2">
        Side Footer
      </div>
    </aside>
  );
};

export default Nav;
