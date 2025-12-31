import Logo from "../Logo";
import Button from "../ui/Button";

export default function Nav(){
    return (
        <nav className="sticky top-0 z-50">
            <div className="flex justify-between">
                <div>
                    <Logo/>
                </div>
                <div>
                    toggle
                    <Button variant="primary">login</Button>
                </div>
            </div>
        </nav>
    )
}