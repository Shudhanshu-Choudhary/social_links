import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button, Card } from "react-bootstrap";
const FacebookLoginPage = () => {
    const {data: session , status } = useSession();
    const user = {}

    if (status === "authenticated") {
        console.log(session.user.email)
        //setUser(session.user)
        user = session.user
    }

    console.log(user);

    return ( 
        <div className="container">
            <div className="facebook-login-btn-container mt-5">
                {
                    status === "unauthenticated" ? (
                        <div className="facebook-sign-in-btn text-center">
                            <Link href='/api/auth/signin'>
                                <Button
                                    onClick={e => {
                                        e.preventDefault()
                                        signIn("facebook")
                                    }}
                                >
                                    Sign In with facebook
                                </Button>
                            </Link>
                       </div>
                    ) : (
                        <div className="facebook-signout-btn-container text-center">
                            <Link href='/api/auth/signout'>
                                <Button
                                    onClick={e => {
                                        e.preventDefault()
                                        signOut("facebook")
                                    }}
                                >
                                    Sign out with facebook    
                                </Button>
                            </Link>
                        </div>
                    )
                }
                 
            </div>
            <div className="col d-flex justify-content-center mt-5">
                {
                   user ? (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src= {user.image} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ) : {}
                }
            </div>
        </div>
     );
}
 
export default FacebookLoginPage;