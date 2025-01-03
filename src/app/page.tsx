import MessageBox from "@/components/chatboard/messagebox/MessageBox";
import ChartSidebar from "@/components/chatboard/shared/ChartSidebar";
const WellCome = () => {
  return (
    <div className="p-14">
      <div className="flex border border-gray-700 rounded-lg ">
        <div className="">
          <ChartSidebar />
        </div>
        <div className="flex-1">
          <MessageBox />
        </div>
      </div>
    </div>
  );
};

export default WellCome;
