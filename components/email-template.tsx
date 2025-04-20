interface EmailTemplateProps {
    firstName: string
    lastName: string
    email: string
    country: {
        code: string
        name: string
        dial_code: string
    }
    phoneNumber?: string
    message: string
}

export const EmailTemplate = ({ firstName, lastName, email, country, phoneNumber, message }: EmailTemplateProps) => {
    return (
        <table
            cellPadding="0"
            cellSpacing="0"
            border={0}
            width="100%"
            style={{
                fontFamily: "Arial, sans-serif",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "0",
                borderCollapse: "collapse",
            }}
        >
            <tbody>
                <tr>
                    <td style={{ padding: "20px 0" }}>
                        {/* Header Section */}
                        <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={{ textAlign: "center" }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            cellPadding="0"
                                            cellSpacing="0"
                                            border={0}
                                            align="center"
                                            style={{
                                                backgroundColor: "rgba(99, 102, 241, 0.1)",
                                                borderRadius: "30px",
                                                display: "inline-block",
                                                margin: "0 auto 15px auto",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td style={{ padding: "8px 16px" }}>
                                                        <p
                                                            style={{
                                                                fontSize: "14px",
                                                                margin: "0",
                                                                color: "#6366f1",
                                                                fontWeight: "bold",
                                                            }}
                                                        >
                                                            New Contact Request
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2
                                            style={{
                                                fontSize: "24px",
                                                fontWeight: "bold",
                                                margin: "0 0 10px 0",
                                                color: "#111827",
                                            }}
                                        >
                                            Someone reached out
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p
                                            style={{
                                                fontSize: "16px",
                                                margin: "0 0 25px 0",
                                                color: "#6b7280",
                                            }}
                                        >
                                            A visitor from your portfolio website has sent you a message
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Sender Info Section */}
                        <table
                            cellPadding="0"
                            cellSpacing="0"
                            border={0}
                            width="100%"
                            style={{
                                backgroundColor: "#f9fafb",
                                borderRadius: "8px",
                                marginBottom: "20px",
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td style={{ padding: "20px" }}>
                                        <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style={{ paddingBottom: "15px" }}>
                                                        <p
                                                            style={{
                                                                margin: "0 0 5px 0",
                                                                fontSize: "14px",
                                                                fontWeight: "bold",
                                                                color: "#6b7280",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            SENDER
                                                        </p>
                                                        <p
                                                            style={{
                                                                margin: "0",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                color: "#111827",
                                                            }}
                                                        >
                                                            {firstName} {lastName}
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                                                            <tbody>
                                                                <tr style={{ verticalAlign: "top" }}>
                                                                    <td width="50%" style={{ paddingBottom: "15px" }}>
                                                                        <p
                                                                            style={{
                                                                                margin: "0 0 5px 0",
                                                                                fontSize: "14px",
                                                                                fontWeight: "bold",
                                                                                color: "#6b7280",
                                                                                textTransform: "uppercase",
                                                                            }}
                                                                        >
                                                                            EMAIL
                                                                        </p>
                                                                        <p style={{ margin: "0", fontSize: "16px", color: "#374151" }}>
                                                                            <a href={`mailto:${email}`} style={{ color: "#6366f1", textDecoration: "none" }}>
                                                                                {email}
                                                                            </a>
                                                                        </p>
                                                                    </td>
                                                                    <td width="50%" style={{ paddingBottom: "15px" }}>
                                                                        <p
                                                                            style={{
                                                                                margin: "0 0 5px 0",
                                                                                fontSize: "14px",
                                                                                fontWeight: "bold",
                                                                                color: "#6b7280",
                                                                                textTransform: "uppercase",
                                                                            }}
                                                                        >
                                                                            LOCATION
                                                                        </p>
                                                                        <p style={{ margin: "0", fontSize: "16px", color: "#374151" }}>{country.name}</p>
                                                                    </td>
                                                                </tr>
                                                                {phoneNumber && (
                                                                    <tr>
                                                                        <td colSpan={2}>
                                                                            <p
                                                                                style={{
                                                                                    margin: "0 0 5px 0",
                                                                                    fontSize: "14px",
                                                                                    fontWeight: "bold",
                                                                                    color: "#6b7280",
                                                                                    textTransform: "uppercase",
                                                                                }}
                                                                            >
                                                                                PHONE
                                                                            </p>
                                                                            <p style={{ margin: "0", fontSize: "16px", color: "#374151" }}>
                                                                                {country.dial_code} {phoneNumber}
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Message Section */}
                        <table
                            cellPadding="0"
                            cellSpacing="0"
                            border={0}
                            width="100%"
                            style={{
                                backgroundColor: "#f9fafb",
                                borderRadius: "8px",
                                marginBottom: "20px",
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td style={{ padding: "20px" }}>
                                        <p
                                            style={{
                                                margin: "0 0 10px 0",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                color: "#6b7280",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            MESSAGE
                                        </p>
                                        <div
                                            style={{
                                                fontSize: "16px",
                                                lineHeight: "1.6",
                                                color: "#374151",
                                            }}
                                        >
                                            {message.split("\n").map((line, i) => (
                                                <p key={i} style={{ margin: "0 0 10px 0" }}>
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Footer Section */}
                        <table
                            cellPadding="0"
                            cellSpacing="0"
                            border={0}
                            width="100%"
                            style={{ borderTop: "1px solid #e5e7eb", paddingTop: "20px", textAlign: "center" }}
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "#9ca3af",
                                                paddingTop: "20px",
                                                margin: "0 0 15px 0",
                                            }}
                                        >
                                            This message was sent from your portfolio contact form
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table cellPadding="0" cellSpacing="0" border={0} align="center">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            backgroundColor: "#6366f1",
                                                            borderRadius: "6px",
                                                            padding: "8px 16px",
                                                        }}
                                                    >
                                                        <a
                                                            href={`mailto:${email}`}
                                                            style={{
                                                                color: "#ffffff",
                                                                textDecoration: "none",
                                                                fontSize: "14px",
                                                                fontWeight: "bold",
                                                                display: "inline-block",
                                                            }}
                                                        >
                                                            Reply to this message
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}