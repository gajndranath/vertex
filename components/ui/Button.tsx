export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button className='btn' {...props}>{children}</button>;
