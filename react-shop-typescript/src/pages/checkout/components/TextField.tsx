import ErrorInput from "components/ErrorInput"

interface TextFieldProp extends React.HTMLAttributes<HTMLInputElement> {
    label: string,
    required?: boolean,
    type?: string
    error?: string
    className?: string
}
export const TextField: React.FC<TextFieldProp> = ({ label, required, error, className, type = 'text', ...ref }) => {
    return (
        <div className={`col-12 ${className ?? ''}`}>
            {/* First Name */}
            <div className="form-group">
                <label style={{ width: '100%' }}><div style={{ marginBottom: 8 }}>{label} {required ? '*' : ''}</div>
                    <input {...ref} className="form-control form-control-sm" type={type} />
                </label>
                {error && <ErrorInput error={error} />}
            </div>
        </div>
    )
}