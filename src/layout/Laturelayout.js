import React, { useState } from "react";

const LatureLayout = () => {
  const [data, setData] = useState([{ id: 101 }, { id: 102 }]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [editing, setEditing] = React.useState({
    id: "",
    dept: "",
    profNo: "",
    profName: "",
    title: "",
    credit: "",
    max: "",
    remain: "",
  });
  function openEdit(row) {
    setEditing(row);
    setIsOpen(true);
  }
  function closeEdit() {
    setIsOpen(false);
  }
  function saveEdit() {
    console.log("SAVE:", editing);
    setIsOpen(false);
  }
  const AddClickHandler = (e) => {
    const { name, value } = e.target;
    setEditing((prev) => ({ ...prev, [name]: value }));

    const DeleteHandler = (id) =>
      setData((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div
      id="Lature"
      className="
              flex flex-col lg:flex-row
              gap-4 w-full min-h-[80vh] p-4
              bg-white
            "
    >
      {/* Left 20% */}

      {/* Right 80% */}
      <main
        id="layout"
        className="
                h-[80vh] flex-1 lg:basis-[80%]
                rounded-[12px] p-4 text-center
                shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden
              "
        style={{ background: "#ffd2e1" }}
      >
        <div className="bg-[#111] text-white rounded-[10px] px-3 py-2 mb-2 font-semibold">
          강의 관리
        </div>
        <div className="bg-sky-400 rounded-[10px] p-5 w-[80%] mx-auto text-center font-semibold shadow-md">
          <h2 className="text-xl mb-4 text-white">전체 강의 리스트</h2>

          <div className="bg-white rounded-md p-4 overflow-x-auto">
            <table className="border-collapse border border-gray-400 w-full text-center text-sm">
              <thead className="bg-gray-200">
                <tr className="border border-gray-400">
                  <th className="border border-gray-400 px-4 py-4 w-[8%]">
                    강의 ID
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[12%]">
                    개설학과
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[10%]">
                    교수번호
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[10%]">
                    교수명
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[15%]">
                    강의명
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[6%]">
                    학점
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[10%]">
                    수강정원
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[10%]">
                    잔여인원
                  </th>
                  <th className="border border-gray-400 px-4 py-4 w-[10%]">
                    수정 | 삭제
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border border-gray-300 hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-4 h-12">101</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    컴퓨터공학과
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    P001
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    김철수
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    자료구조
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">3</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">30</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">5</td>
                  <td className="border border-gray-300 px-4 py-4 h-12 text-blue-600">
                    수정 | 삭제
                  </td>
                </tr>

                <tr className="border border-gray-300 hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-4 h-12">102</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    소프트웨어학과
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    P002
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    이영희
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    운영체제
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">3</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">40</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">8</td>
                  <td className="border border-gray-300 px-4 py-4 h-12 text-blue-600">
                    수정 | 삭제
                  </td>
                </tr>

                <tr className="border border-gray-300 hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-4 h-12">103</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    정보통신공학과
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    P003
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    박지훈
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    네트워크
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">3</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">35</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">10</td>
                  <td className="border border-gray-300 px-4 py-4 h-12 text-blue-600">
                    수정 | 삭제
                  </td>
                </tr>

                <tr className="border border-gray-300 hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-4 h-12">104</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    인공지능학과
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    P004
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    최민수
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    머신러닝
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">4</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">30</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">3</td>
                  <td className="border border-gray-300 px-4 py-4 h-12 text-blue-600">
                    수정 | 삭제
                  </td>
                </tr>

                <tr className="border border-gray-300 hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-4 h-12">105</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    데이터사이언스학과
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    P005
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    정하늘
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">
                    통계학
                  </td>
                  <td className="border border-gray-300 px-4 py-4 h-12">3</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">25</td>
                  <td className="border border-gray-300 px-4 py-4 h-12">2</td>
                  <td className="border border-gray-300 px-4 py-4 h-12 text-blue-600">
                    <a
                      href="../components/EditLectureModal"
                      onClick={AddClickHandler}
                    >
                      수정
                    </a>{" "}
                    |<button onClick={() => DeleteHandler(101)}>삭제</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
export default LatureLayout;
