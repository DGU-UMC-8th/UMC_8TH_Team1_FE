
const FindHome = () => {
  return (
    <div className="px-6 py-10">
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4 p-2">멘토 찾기</h3>
        <div className="flex items-center mb-4 text-sm">
          <button className="w-15 h-12 mx-1 border border-gray-300 rounded-full hover:bg-blue-400 transition-all duration-300">IT</button>
          <button className="w-15 h-12 mx-1 border border-gray-300 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-300">마케팅</button>
          <button className="w-15 h-12 mx-1 border border-gray-300 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-300">투자</button>
          <button className="w-15 h-12 mx-1 border border-gray-300 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-300">디자인</button>
          <button className="w-15 h-12 mx-1 border border-gray-300 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-300">창업</button>
        </div>
        <div className="flex items-center mb-4 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* 여기에 MentorCard 반복 */}
            <div className="p-5 border-0 rounded-lg shadow bg-gray-100">멘토 카드</div>
            <div className="p-5 border-0 rounded-lg shadow bg-gray-100">멘토 카드</div>
            <div className="p-5 border-0 rounded-lg shadow bg-gray-100">멘토 카드</div>

          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4 p-2">팀원 찾기</h3>
        <div className="flex items-center mb-4 text-sm">
          <button className="w-18 h-12 p-1 mx-1 border border-gray-300 rounded-full hover:bg-blue-400 transition-all duration-300">스타트업</button>
          <button className="w-15 h-12 mx-1 border border-gray-300 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-300">소셜</button>
          <button className="w-15 h-12 mx-1 border border-gray-300 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-300">디자인</button>
          <button className="w-15 h-12 mx-1 border border-gray-300 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-300">개발</button>
        </div>
        <div className="flex items-center mb-4 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* 여기에 MentorCard 반복 */}
            <div className="p-5 border-0 rounded-lg shadow bg-gray-100">팀원 카드</div>
            <div className="p-5 border-0 rounded-lg shadow bg-gray-100">팀원 카드</div>
            <div className="p-5 border-0 rounded-lg shadow bg-gray-100">팀원 카드</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FindHome;
