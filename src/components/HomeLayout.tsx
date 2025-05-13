import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* ✅ 고정 상단 헤더 */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <h1 className="text-blue-600 font-bold text-xl ">MentorMatch</h1>
        </div>
      </header>

      {/* ✅ 메인 콘텐츠 (헤더 높이만큼 padding 추가) */}
      <main className="flex-1 pt-20 pb-5 px-4 md:px-8 max-w-7xl mx-auto w-full bg-white">
        <Outlet />
      </main>

      {/* ✅ 푸터 */}
  <footer className="bg-[#1B2431] text-gray-300 px-15 py-15 text-sm">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
    {/* MentorMatch 소개 */}
    <div>
      <h4 className="text-white font-bold mb-2">MentorMatch</h4>
      <p className="text-sm text-gray-400">함께 성장하는 멘토링 플랫폼</p>
    </div>

    {/* 서비스 */}
    <div>
      <h4 className="text-white font-bold mb-2">서비스</h4>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">멘토 찾기</a></li>
        <li><a href="#" className="hover:underline">팀 찾기</a></li>
        <li><a href="#" className="hover:underline">멘토 등록하기</a></li>
      </ul>
    </div>

    {/* 고객지원 */}
    <div>
      <h4 className="text-white font-bold mb-2">고객지원</h4>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">자주 묻는 질문</a></li>
        <li><a href="#" className="hover:underline">이용가이드</a></li>
        <li><a href="#" className="hover:underline">문의하기</a></li>
      </ul>
    </div>

    {/* 팔로우 */}
    <div>
      <h4 className="text-white font-bold mb-2">팔로우</h4>
      <div className="flex gap-4 text-gray-400">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>

  {/* 구분선 + 저작권 */}
  <div className="border-t border-gray-600 mt-8 pt-4 text-center text-xs text-gray-500">
    © 2025 MentorMatch. All rights reserved.
  </div>
</footer>

    </div>
  );
};

export default HomeLayout;

