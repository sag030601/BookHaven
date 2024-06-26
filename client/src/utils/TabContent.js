// import React from "react";
// import FictionContent from "../utils/FictionContent"
// import NonFictionContent from "../utils/NonFictionContent"
// import MystreyContent from "../utils/MystreyContent"
// import SciFiContent from "../utils/SciFiContent"
// import SelfHelpContent from "../utils/SelfHelpContent"
// import ThrillerContent from "../utils/ThrillerContent"

// function TabContent({ activeGenre }) {
//   return (
//     <div>
//       {activeGenre === "Fiction" && <FictionContent activeGenre={activeGenre} />}
//       {activeGenre === "NonFiction" && <FictionContent  activeGenre={activeGenre}  />}
//       {activeGenre === "Mystrey" && <FictionContent  activeGenre={activeGenre}  />}
//       {activeGenre === "SciFi" && <FictionContent  activeGenre={activeGenre}  />}
//       {activeGenre === "SelfHelp" && <FictionContent  activeGenre={activeGenre}  />}
//       {activeGenre === "Thriller" && <FictionContent  activeGenre={activeGenre}  />}
//     </div>
//   );
// }

// export default TabContent;






import React from "react";
import FictionContent from "../utils/FictionContent";


function TabContent({ activeGenre, selectedSortOptions }) {
  return (
    <div>
      {activeGenre === "Fiction" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "NonFiction" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "Mystrey" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "SciFi" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "SelfHelp" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "Thriller" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "newArrival" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "topPicks" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
      {activeGenre === "bestSeller" && <FictionContent activeGenre={activeGenre} selectedSortOptions={selectedSortOptions} />}
    </div>
  );
}

export default TabContent;
