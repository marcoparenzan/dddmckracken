using DDDMcKracken.Domain.Events;
using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DDDMcKracken.Domain
{
    public interface IDDDActor : IActor<IDDDActor, IDDDItem>
    {
        // actions
        IDDDActor Push(IDDDItem item);
        IDDDActor Pull(IDDDItem item);
        IDDDActor Give(IDDDItem item, IOtherActor target);
        IDDDActor Open(IDDDItem item);
        IDDDActor Close(IDDDItem item);
        IDDDActor Read(IDDDItem item);
        IDDDActor WalkTo(IDDDItem item);
        IDDDActor PickUp(IDDDItem item);
        IDDDActor WhatIs(IDDDItem item);
        IDDDActor PutOn(IDDDItem item);
        IDDDActor TakeOff(IDDDItem item);
        IDDDActor Use(IDDDItem item);
        IDDDActor TurnOn(IDDDItem item);
        IDDDActor TurnOff(IDDDItem item);

        // events
        void Move(int x, int y);
        event DDDActorMoved.Handler Moved;

        // DTO
        ActorScript GetScript();
    }
}
