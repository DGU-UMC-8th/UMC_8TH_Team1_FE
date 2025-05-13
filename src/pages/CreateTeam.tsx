
/* 필요한 기능
1.아이디어 제목/ 아이디어 소개/ 해결하고자 하는 문제, 타겟 사용자, 필요한 팀원 역할, 기술 스택, 진행 일정(시작 예정일, 완료 예정일) 을 담을 버튼-> 일단은 요거부터
2. 이러한 버튼을 전부 담아서 서버에 제출해주어야 함
3. 정보를 바탕으로 새로등록된 팀을 생성하여야 하여야 함

*/




import React, { useState } from "react";

const roles = ["프론트엔드 개발자", "백엔드 개발자", "디자이너", "기획자", "PM"];


type NewTeamFormData = {
    title: string;
    description: string;
    problem: string;
    targetUser: string;
    roles: string[];
    stack: string[];
    startDate: string;
    endDate: string;
};

export default function NewTeamForm() {
    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>(roles[0]);
    const [techStack, setTechStack] = useState<string[]>([]);
    const [techInput, setTechInput] = useState<string>("");
    const [schedule, setSchedule] = useState<string>("");
    const [isPrivate, setIsPrivate] = useState<boolean>(false);

    const addRole = () => {
        if (!selectedRoles.includes(selectedRole)) {
            setSelectedRoles([...selectedRoles, selectedRole]);
        }
    };

    const removeRole = (role: string) => {
        setSelectedRoles(selectedRoles.filter((r) => r !== role));
    };

    const addTech = () => {
        if (techInput && !techStack.includes(techInput)) {
            setTechStack([...techStack, techInput]);
            setTechInput("");
        }
    };

    const removeTech = (tech: string) => {
        setTechStack(techStack.filter((t) => t !== tech));
    };

    const handleSaveDraft = () => {
        console.log("임시 저장 데이터:", { selectedRoles, techStack, schedule, isPrivate });
        alert("임시 저장되었습니다!");
    };

    const handleCreateTeam = () => {
        console.log("팀 생성 데이터:", { selectedRoles, techStack, schedule, isPrivate });
        alert("팀이 생성되었습니다!");
    };
    const majorTechOptions = [
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Python",
    ];
    const [selectedTechOption, setSelectedTechOption] = useState<string>(majorTechOptions[0]);

const addSelectedTech = () => {
    if (!techStack.includes(selectedTechOption)) {
        setTechStack([...techStack, selectedTechOption]);
    }
};


    return (
        <div className="min-h-screen bg-gray-50">
          {/* 헤더 */}
          <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            <h1 className="text-xl font-bold text-blue-600">StartupMatch</h1>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <button className="text-2xl">☰</button>
            </div>
          </header>
    
          {/* 본문 */}
          <main className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow">
            <div className="bg-blue-600 text-white text-center py-4 rounded mb-6">
              <h2 className="text-lg font-semibold">팀 생성 및 매칭</h2>
              <p className="text-sm">창업 아이디어를 등록하고 함께할 팀원을 모집해보세요</p>
            </div>
    
            <form className="space-y-4">
              {/* 제목 */}
              <div>
                <label className="block text-sm font-medium">아이디어 제목</label>
                <input
                  type="text"
                  placeholder="간결하고 명확한 제목을 입력하세요"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
    
              {/* 소개 */}
              <div>
                <label className="block text-sm font-medium">
                  아이디어 소개 <span className="text-xs text-gray-500">(300자~1000자)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="아이디어에 대한 상세 설명을 입력하세요"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="text-right text-xs text-gray-500">0/1000자</div>
              </div>
    
              {/* 문제 */}
              <div>
                <label className="block text-sm font-medium">해결하고자 하는 문제</label>
                <textarea
                  rows={3}
                  placeholder="이 아이디어가 해결하고자 하는 문제점은 무엇인가요?"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
    
              {/* 타겟 */}
              <div>
                <label className="block text-sm font-medium">타겟 사용자</label>
                <textarea
                  rows={3}
                  placeholder="주요 타겟 사용자층을 설명하세요"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </form>
         
         
            <h2 className="text-lg font-semibold mb-4">팀 구성 정보</h2>

            {/* 팀원 역할 */}
            <div className="mb-4">
                <label className="block mb-2">필요한 팀원 역할</label>
                <div className="flex items-center gap-2 mb-2">
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="border rounded p-2"
                    >
                        {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                    <button onClick={addRole} className="px-3 py-2 bg-gray-200 rounded">+ 역할 추가</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {selectedRoles.map((role) => (
                        <span key={role} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {role}
                            <button onClick={() => removeRole(role)} className="ml-1 text-blue-500">✕</button>
                        </span>
                    ))}
                </div>
            </div>

            {/* 기술 스택 */}
            <div className="mb-4">
                <label className="block mb-2">기술 스택</label>

                <div className="flex items-center gap-2 mb-2">
        <select
            value={selectedTechOption}
            onChange={(e) => setSelectedTechOption(e.target.value)}
            className="border rounded p-2"
        >
            {majorTechOptions.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
            ))}
        </select>
        <button onClick={addSelectedTech} className="px-3 py-2 bg-gray-200 rounded">+ 기술 추가</button>
    </div>


                <div className="flex items-center gap-2 mb-2">
                    <input
                        type="text"
                        value={techInput}
                        onChange={(e) => setTechInput(e.target.value)}
                        placeholder="사용할 기술 입력"
                        className="border rounded p-2"
                    />
                    <button onClick={addTech} className="px-3 py-2 bg-gray-200 rounded">추가</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {tech}
                            <button onClick={() => removeTech(tech)} className="ml-1 text-blue-500">✕</button>
                        </span>
                    ))}
                </div>
            </div>

            {/* 진행 일정 */}
            <div className="mb-4">
                <label className="block mb-2">진행 일정</label>
                <textarea
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    placeholder="프로젝트 진행 일정과 주요 마일스톤을 설명하세요"
                    className="w-full border rounded p-2"
                    rows={4}
                />
            </div>

            {/* 비공개 설정 */}
            <div className="mb-4 flex items-center">
                <input
                    type="checkbox"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                    className="mr-2"
                />
                <label>비공개 팀으로 설정</label>
            </div>

            {/* 하단 버튼 */}
            <div className="flex justify-end gap-2">
                <button onClick={handleSaveDraft} className="px-6 py-3 bg-gray-200 text-black rounded">임시 저장</button>
                <button onClick={handleCreateTeam} className="px-6 py-3 bg-blue-600 text-white rounded">팀 생성</button>
            </div>
            </main>
        </div>
      );
    }