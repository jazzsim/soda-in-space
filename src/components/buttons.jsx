export function SignInButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-main text-t-light px-4 py-1 rounded-xl hover:shadow-main duration-300"
    >
      {text}
    </button>
  );
}

export default SignInButton;
