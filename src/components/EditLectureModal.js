
import React, { useState } from "react";


export default function EditLectureModal() {
  const [form, setForm] = useState({
    id: "9",
    title: "강의 등록 test8",
    credit: "2",
    max: "40",
    remain: "40",
    prof: "P0000001",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("수정 데이터\n" + JSON.stringify(form, null, 2));
  };

  const onCancel = () => {
    alert("취소되었습니다.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[95%] max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-white">
        {/* 헤더 */}
        <div className="bg-[#1f2a60] text-white text-center py-4 text-lg font-semibold">
          강의 수정
        </div>
        {/* 폼 */}
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <label className="block">
            <span className="block text-sm text-gray-700 mb-1">
              강의 아이디
            </span>
            <input
              name="id"
              value={form.id}
              disabled
              className="w-full rounded-md border border-gray-300 bg-gray-100 text-gray-600 px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="block text-sm text-gray-700 mb-1">강의명</span>
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              className="w-full rounded-md border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-3 py-2"
              placeholder="강의명 입력"
            />
          </label>

          <label className="block">
            <span className="block text-sm text-gray-700 mb-1">학점</span>
            <input
              name="credit"
              value={form.credit}
              onChange={onChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
              inputMode="numeric"
            />
          </label>

          <label className="block">
            <span className="block text-sm text-gray-700 mb-1">수강 정원</span>
            <input
              name="max"
              value={form.max}
              disabled
              className="w-full rounded-md border border-gray-300 bg-gray-100 text-gray-600 px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="block text-sm text-gray-700 mb-1">잔여 인원</span>
            <input
              name="remain"
              value={form.remain}
              onChange={onChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
              inputMode="numeric"
            />
          </label>

          <label className="block">
            <span className="block text-sm text-gray-700 mb-1">강의 교수</span>
            <input
              name="prof"
              value={form.prof}
              disabled
              className="w-full rounded-md border border-gray-300 bg-gray-100 text-gray-600 px-3 py-2"
            />
          </label>

          <div className="pt-2 flex justify-center gap-3">
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition"
            >
              수정
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 transition"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
