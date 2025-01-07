import MessageBox from "@/components/chatboard/messagebox/MessageBox";
import ChartSidebar from "@/components/chatboard/shared/ChartSidebar";
import { SocketProvider } from "@/components/chatboard/socket/SocketProvider";

import PribetRoute from "@/components/routes/PribetRouter";
const WellCome = () => {
  return (
    <SocketProvider>
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
    </SocketProvider>
  );
};

export default WellCome;
