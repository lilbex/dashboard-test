import TaskCard from "./TaskCard";
import styled from "styled-components";
import Graph from "./graph/Tabslide";
import TaskTable from "./taskTable/TaskTable";

const Dashboard = () => {
  return (
    <DashboardStyle>
      <div className="task-container">
        <TaskCard title="Task Completed" number="18" srcLogo="images/card-1-icon.svg" src="images/graph-snip-green.svg" numMore="10" whichWeek="from last week" />
        <TaskCard title="New Task" number="20" srcLogo="images/new-task.svg" src="images/graph-snip-orange.svg" numMore="10" whichWeek="from last week" />
        <TaskCard title="Project Done" number="15" srcLogo="images/project-done.svg" src="images/graph-snip-red.svg" numMore="10" whichWeek ="from last week"/>
      </div>
      <div className="graph-section">
        <Graph />
      </div>
      <div className="table-section">
        <TaskTable />
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;

const DashboardStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .task-container {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    @media screen and (max-width: 1280px) {
      margin-bottom:10px;
      
    }
  }
  .graph-section {
    width: 100%;
  }
`;
