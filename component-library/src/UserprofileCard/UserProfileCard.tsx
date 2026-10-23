import type{ UserProfileCardProps,User } from "../types"


export function UserProfileCard(props: UserProfileCardProps){

    return(
        <>
        {props.user.id}
        {props.user.name}
        {props.user.email}
        {props.user.role}
        {props.user.avatarUrl}
        
        </>

    )
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user, showEmail, showRole, onEdit, children,
}) => (
  <div className="p-4 border rounded shadow">
    {user.avatarUrl && (
      <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full" />
    )}
    <h2 className="text-xl font-bold">{user.name}</h2>
    {showEmail && <p>{user.email}</p>}
    {showRole && <p>{user.role}</p>}
    {onEdit && (
      <button onClick={() => onEdit(user.id)}>Edit Profile</button>
    )}
    {children}
  </div>
);
