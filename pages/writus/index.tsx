import PageTitle from '@components/PageTitle';

export default function index() {
    return (
        <div className="w-screen h-screen m-0 bg-[#C0C0C0]">
            <PageTitle title="Writus" hideInitials />
            <iframe
                src="/hacksc-22/index.html"
                style={{
                    width: '100%',
                    height: 'calc(100% - 4px)',
                    border: 'none',
                    overflow: 'hidden',
                }}
            />
        </div>
    );
}
