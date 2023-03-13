namespace API.Entities
{
    public class AppUser : AbstractAppUser, IAppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public override void Display()
        {
            throw new NotImplementedException();
        }
    }
    public abstract class AbstractAppUser
    {
        public abstract void Display();
    }

    interface IAppUser
    {
        void Display();
    }
}




