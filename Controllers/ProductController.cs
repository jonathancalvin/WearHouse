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
    public class ProductController : ControllerBase
    {
        private readonly AppDBContext _context;
        public ProductController(AppDBContext context)
        {
            _context = context;
        }
        // GET: api/<ProductController>
        [HttpGet]
        [Route("GetAllProduct")]
        public List<Product> GetProduct()
        {
            var productList = _context.Product
                .Select(x => new Product
                {
                    ProductId = x.ProductId,
                    ProductName = x.ProductName
                }) ;
            return productList.ToList();
        }

        // GET api/<ProductController>/5
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddProduct([FromBody] AddCategoryRequest pr)
        {
            _context.Product.Add(
                new Product
                {
                    ProductId = Guid.NewGuid(),
                    ProductName = pr.ProductName
                });
            _context.SaveChanges();
            return Ok();
        }

        // PUT api/<ProductController>/5
        [HttpPut]
        [Route("UpdateCategory/{id}")]
        public IActionResult UpdateCategory([FromRoute] Guid id, [FromBody] UpdateCategory uc)
        {
            var product = _context.Product.Find(id);
            if (product == null)
            {
                return NotFound("Category Not Found");
            }
            product.ProductName = uc.ProductName;
            _context.SaveChanges();
            return Ok("Category Updated");
        }

        // DELETE api/<ProductController>/5
            [HttpDelete]
            [Route("DeleteCategory/{id}")]
            public IActionResult DeleteCategory([FromRoute] Guid id)
            {
                var product = _context.Product.Find(id);
                if (product == null)
                {
                    return NotFound("Category Not Found");
                }
                _context.Product.Remove(product);
                _context.SaveChanges();
                return Ok("Product Deleted Successfully");
            }
        }
}
