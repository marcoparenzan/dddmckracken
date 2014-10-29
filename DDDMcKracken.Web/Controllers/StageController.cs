using DDDMcKracken.Domain;
using DDDMcKracken.Domain.Actors;
using DDDMcKracken.Domain.Stages;
using DDDMcKracken.Web.Models;
using ScummDDD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DDDMcKracken.Web.Controllers
{
    public class StageController : ApiController
    {
        protected IStage<IDDDActor, IDDDItem> Stage
        {
            get {
                if (System.Web.HttpContext.Current.Session["stage"] == null)
                {
                    var stage = new Stage0000();
                    System.Web.HttpContext.Current.Session["Stage0000"] = stage;
                    stage.Enter(DDD);
                    System.Web.HttpContext.Current.Session["stage"] = System.Web.HttpContext.Current.Session["Stage0000"];
                }
                return (IStage<IDDDActor, IDDDItem>)System.Web.HttpContext.Current.Session["stage"]; 
            }
        }

        protected IItemContainer<IDDDItem> Items
        {
            get
            {
                return Stage;
            }
        }

        protected IActorContainer<IDDDActor, IDDDItem> Actors
        {
            get
            {
                return Stage;
            }
        }

        protected IDDDActor DDD
        {
            get
            {
                if (System.Web.HttpContext.Current.Session["ddd"] == null)
                {
                    var ddd = new DDDActor(320, 190, "DDD");
                    ddd.Moved += (a,e) => {
                        SceneHub.Default.Clients.All.ddd_moved(e.X, e.Y);
                    };
                    System.Web.HttpContext.Current.Session["ddd"] = ddd;
                }
                return (IDDDActor)System.Web.HttpContext.Current.Session["ddd"];
            }
        }

        [HttpGet]
        public StageScript Script()
        {
            return Stage.GetScript();
        }

        public void WalkTo(ItemArg arg)
        {
            var item = Items.FindById(arg.itemId);
            DDD.WalkTo(item);
        }

        public void WhatIs([FromBody]ItemArg arg)
        {
            var item = Items.FindById(arg.itemId);
            DDD.WhatIs(item);
        }

        public void Push([FromBody]ItemArg arg)
        {
            var item = Items.FindById(arg.itemId);
            DDD.Push(item);
        }

        public void Pull([FromBody]ItemArg arg)
        {
            var item = Items.FindById(arg.itemId);
            DDD.Pull(item);
        }
    }
}
