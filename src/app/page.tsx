import MessageBox from "@/components/chatboard/messagebox/MessageBox";
import ChartSidebar from "@/components/chatboard/shared/ChartSidebar";
import PribetRoute from "@/components/routes/PribetRouter";
const WellCome = () => {
  return (
    <PribetRoute>
      <div className="px-20 py-8">
        <div className="flex border border-gray-700 rounded-lg ">
          <div className="">
            <ChartSidebar />
          </div>
          <div className="flex-1">
            <MessageBox />
          </div>
        </div>
      </div>
    </PribetRoute>
  );
};

export default WellCome;
