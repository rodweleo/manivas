export const ProfileMenuListItem = ({ label, icon }: {
    label: string,
    icon: string
}) => {
    return <div className="flex items-center justify-start space-x-4">
        <i className={`${icon} bg-green-500/20 p-3 rounded-md text-white`}></i>
        <h1 className="text-white font-bold">{label}</h1>
    </div>
}