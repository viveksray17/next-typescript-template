import { NextPage, GetStaticProps } from "next";
// import styles from '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: { message: "Hello World" },
	};
};

const Home: NextPage<{ message: string }> = ({ message }) => {
	return <div className="container">{message}</div>;
};

export default Home;
