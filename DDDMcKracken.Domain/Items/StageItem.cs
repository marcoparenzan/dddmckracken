using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain.Items.Stage0000
{
    public class StageItem : ItemAggregate<IDDDItem>, IDDDItem
    {
        public StageItem() { }

        public StageItem(int x, int y, string description = "")
            : base(x, y, description)
        {

        }

        public virtual void PushedBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void PulledBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void GivenBy(IDDDActor actor, IOtherActor target)
        {
            CannotDoThis();
        }

        public virtual void OpenedBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void ClosedBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void ReadBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void WalkedToBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void PickedUpBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void WhatIs(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void PutOnBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void TakenOffBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void UsedBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void TurnedOnBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        public virtual void TurnedOffBy(IDDDActor actor)
        {
            CannotDoThis();
        }

        void IItem<IDDDItem>.Goto(IItemContainer<IDDDItem> stage)
        {
            CannotDoThis();
        }
    }
}
