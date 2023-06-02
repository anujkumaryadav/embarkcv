import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import googleIMG from "./../../Assets/google.png"
import logInIMG from "./../../Assets/login.jpg"


function Login() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className={styles.container}>
			
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src={logInIMG} alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>User Log in</h2>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src= {googleIMG} alt="google icon" />
						<span>Sing in with Google</span>
					</button>
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sing Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
