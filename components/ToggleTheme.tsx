"use client"
import { useTheme } from "next-themes";
import {Sun,Moon} from "lucide-react";
import { useEffect, useState } from "react";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted,setMounted] = useState(false)

  useEffect(()=>{setMounted(true)},[])
  if(!mounted) return null;
  const isDark = theme === "dark"
   return (
    <button onClick={()=>setTheme(isDark ? "light":"dark")}
    className="hover:border border-zinc-400 rounded-lg p-1"
    >
        {theme == "dark" ? (<Moon/>) : (<Sun/>)}
    </button>
   )
  ;
}
