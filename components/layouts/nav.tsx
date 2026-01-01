import Logo from "../Logo";
import ToggleButton from "../ToggleTheme";
import Button from "../ui/Button";

export default function Nav(){
    return (
        <nav className="sticky top-0 z-50 p-4">
            <div className="flex justify-between items-center">
                <div>
                    <Logo/>
                </div>
                <div className="flex items-center gap-12 justify-center">
                    <div>
                        <ToggleButton/>
                    </div>
                    <div>
                        <Button variant="primary">Login</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}