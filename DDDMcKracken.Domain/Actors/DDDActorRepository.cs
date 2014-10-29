using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Actors
{
    public class DDDActorRepository: IActorRepository<IDDDActor>
    {
        public IDDDActor GetById(Guid id)
        {
            var aggregate = default(IDDDActor);
            //...
            return aggregate;
        }

        public Guid Insert(IDDDActor aggregate)
        {
            var key = Guid.NewGuid();
            //...
            return key;
        }

        public void Update(Guid key, IDDDActor aggregate)
        {
            //...
        }

        public void Delete(Guid key)
        {
            //...
        }
    }
}
