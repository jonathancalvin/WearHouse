using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using WearHouse.Data;
using WearHouse.Models;
using WearHouse.Models.Request;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WearHouse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDBContext _context;

        public UserController(AppDBContext context)
        {
            _context = context;
        }
        // GET: api/<UserController>
        [HttpGet]
        public List<User> GetUser()
        {
            var userList = _context.Users
                .Select(x => new User
                {
                    UserId = x.UserId,
                    UserName = x.UserName,
                    UserEmail = x.UserEmail,
                    UserPassword = x.UserPassword
                });
            return userList.ToList();
        }

        // GET api/<UserController>/5
        [HttpGet]
        [Route("SearchUser")]
        public object SearchUser([FromQuery] string UserEmail, [FromQuery] string password)
        {
            var user = _context.Users.FirstOrDefault(x => x.UserEmail == UserEmail);
            if (user != null && user.UserPassword == password)
            {
                return new
                {
                    status = Ok(),
                    name = user.UserName
                };
            }
            return new
            {
                status = NotFound(),
                name = ""
            };
        }
        // POST api/<UserController>
        [HttpPost]
        [Route("Registration")]
        public void Register([FromBody]addUser addUser) 
        {
            //BELOM VALIDASI
            _context.Users.Add(
                new User { 
                    UserId = Guid.NewGuid(), 
                    UserName =  addUser.UserName, 
                    UserEmail = addUser.UserEmail, 
                    UserPassword = addUser.UserPassword
                });
            _context.SaveChanges();
            return;
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
