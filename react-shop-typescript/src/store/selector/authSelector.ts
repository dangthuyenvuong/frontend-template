import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => useSelector((store: RootState) => store.auth)