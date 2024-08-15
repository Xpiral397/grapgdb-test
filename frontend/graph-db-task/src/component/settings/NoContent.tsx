import { IoAddCircleOutline } from "react-icons/io5";

export function NoContent() {
  return (
    <div>
      <div className="line-clamp-3 leading-[18.7px] font-[400] p-3 w-full bg-white h-[189px] rounded-md border-[#E9EFF4] border-[1px] ">
        <p> 이 관리도구와 연결된 데이터베이스가 없습니다.</p>
        <p>
          위의 버튼을 눌러 새 데이터베이스를 생성하거나, 기존의 데이터베이스와
          연결하세요.
        </p>
      </div>
      <div className="flex items-center space-x-3 text-xl font-semibold font-Montserrat leading-7-24/3">
        <p>Repository</p>
        <IoAddCircleOutline
          className="text-gray-500 cursor-pointer"
          size={24}
        />
      </div>
    </div>
  );
}
