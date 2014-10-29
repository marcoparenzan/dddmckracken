using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public class CannotDoThisException: Exception
    {
        public CannotDoThisException()
        { 
        }

        public CannotDoThisException(string message): base(message)
        {
        }
    }
}
