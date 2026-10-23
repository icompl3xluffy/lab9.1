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

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
};
 
<UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={(userId) => alert(`Editing user ${userId}`)}
>
  <div className="text-sm text-gray-500">
    Last login: 2 hours ago
  </div>
</UserProfileCard>