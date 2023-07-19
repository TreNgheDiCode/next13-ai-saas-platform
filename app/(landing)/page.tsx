import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            Landing Page (Unprotected)
            <div>
                <Link href="/sign-in">
                    <Button>
                        Đăng nhập
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Đăng ký
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;