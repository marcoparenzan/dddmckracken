using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Items.Stage0000
{
    public class PhoneBill : StageItem
    {
        public PhoneBill() { }
        public PhoneBill(int x, int y, string description = "")
            : base(x, y, description)
        { 
        }
    }
}
