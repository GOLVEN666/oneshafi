import Container from "@/components/ccontainer";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <Container>
            {children}
        </Container>
    );
}