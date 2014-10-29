using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScummDDD
{
    public class ItemAggregate<TItem>: IItem<TItem>
        where TItem: IItem<TItem>
    {
        public ItemAggregate() { }

        protected ItemAggregate(int x, int y, string description = "")
        {
            this._id = Guid.NewGuid();
            this._description = string.IsNullOrWhiteSpace(description) ? this.GetType().Name: description;
            this._x = x;
            this._y = y;
        }

        public static T1 CreateNew<T1>(int x, int y, string description = "")
            where T1 : IItem<T1>
        {
            var instance = (T1)Activator.CreateInstance(typeof(TItem), description, x, y);
            return instance;
        }

        protected void CannotDoThis()
        {
            throw new CannotDoThisException();
        }

        private int _x;
        private int _y;
        private Guid _id;
        private string _description;

        void IItem<TItem>.Goto(IItemContainer<TItem> stage)
        {
            _container = stage;
        }

        private IItemContainer<TItem> _container;

        IItemContainer<TItem> IItem<TItem>.Container
        {
            get { return _container; }
        }

        public Guid Id
        {
            get { return _id; }
        }

        public string Description
        {
            get { return _description; }
        }
        
        protected int X
        {
            get { return _x; }
        }

        protected int Y
        {
            get { return _y; }
        }

        public ItemScript GetScript()
        {
            return new ItemScript
            {
                Id = Id
                ,
                Description = Description
                ,
                X = X
                ,
                Y = Y
            };
        }
    }
}
