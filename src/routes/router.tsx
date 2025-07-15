import { createHashRouter } from "react-router-dom";
import EducationPage from "../pages/EducationPage";
import Homescreen from "../pages/Homescreen";
import ProfilePage from "../pages/ProfilePage";
import QuestPage from "../pages/QuestPage";
import ShopPage from "../pages/ShopPage";
import SkillPage from "../pages/SkillPage";

export const router = createHashRouter([
    {
        path: "",
        element: <Homescreen />,
    },
    {
        path: "profile", 
        element: <ProfilePage />,
    },
    {
        path: "education", 
        element: <EducationPage />,
    },
    {
        path: "skill", 
        element: <SkillPage />,
    },
    {
        path: "quest", 
        element: <QuestPage />,
    },
    {
        path: "shop", 
        element: <ShopPage />,
    },
]);
